class Api::BoardsController < ApplicationController
    def show
        @board = Board.includes(:pins).find(params[:id])
    end

    def create
        @board = Board.new(board_params)
        if @board.save
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def update
        @board = Board.includes(:pins).find(params[:id])
        if @board.update(board_params)
            render :show
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        @board = Board.find(params[:id])
        if @board.owner_id == current_user.id
            @board.destroy
            render :show
        else
            render json: ["Sorry, only the owner of a board can delete it"], status: 403
        end
    end

    def index_pins
        @board = Board.includes(:pins).find(params[:id])
    end

    def current_user_list
        @boards = Board.includes(:pins).where(owner_id: current_user.id)
    end

    protected
    def board_params
        params.require(:board).permit(:owner_id, :name, :description)
    end
end