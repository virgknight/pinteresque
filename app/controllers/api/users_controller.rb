class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user
        demo_user = User.find_by(email: "demo@gmail.com")

        if @user.id == demo_user.id
            render json: ["Cmon now, don't mess with my project. You know you can't update the demo user."], status: 403
        elsif @user.update(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = current_user
        demo_user = User.find_by(email: "demo@gmail.com")

        if @user.id != demo_user.id
            @user.destroy
            render :show
        end
    end

    def show_other
        @user = User.find(params[:id])
    end

    def index_pins
        @user = User.includes(:pins).find(params[:id])
    end

    def index_boards
        @user = User.includes(:boards).find(params[:id])
        @boards = @user.boards.includes(:pinassignments, :pins)
    end

    protected
    def user_params
        params.require(:user).permit(:email, :username, :password, :age, :first_name, :last_name, :short_bio, :pronouns, :avatar)
    end
end