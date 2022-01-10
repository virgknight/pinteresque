class Api::BoardsPinsController < ApplicationController
    def index
        @boardspins = BoardsPin.all
    end

    def create
        @boardspin = BoardsPin.new(bp_params)
        if @boardspin.save
            render :show
        else
            render json: @boardspin.errors.full_messages, status: 422
        end
    end

    def destroy
        @boardspin = BoardsPin.find(params[:id])
        @boardspin.destroy
        render :show
    end

    protected
    def bp_params
        params.require(:boardspin).permit(:board_id, :pin_id)
    end
end