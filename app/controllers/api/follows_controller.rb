class Api::FollowsController < ApplicationController
    before_action :set_followable, only: [:index, :create]

    def set_followable
        if params[:user_id]
           @followable = User.find(params[:user_id])
        elsif params[:board_id]
            @followable = Board.find(params[:board_id])
        end
    end

    def index
        @follows = Follow.where(followable_id: @followable.id, followable_type: @followable.class.to_s)
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            render :show
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find(params[:id])
        @follow.destroy
        render :show
    end

    # Gets index of users/boards that the given user is following
    def following
        @follows = Follow.where(follower_id: params[:id])
        render :index
    end

    protected
    def follow_params
        {follower_id: current_user.id, followable_id: @followable.id, followable_type: @followable.class.to_s}
    end
end