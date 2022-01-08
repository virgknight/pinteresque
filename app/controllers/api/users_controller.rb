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
        if @user.update_attributes(user_params)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = current_user
        @user.destroy
        render :show
    end

    def show_other
        @user = User.find(params[:id])
    end

    def index_pins
        @user = User.includes(:pins).find(params[:id])
    end

    protected
    def user_params
        params.require(:user).permit(:email, :username, :password, :age, :first_name, :last_name, :short_bio, :pronouns)
    end
end