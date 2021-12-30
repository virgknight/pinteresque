class SessionsController < ApplicationController
    def new
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Nice try pal"], status: 401 #VKNOTE: def change this to whatever Pinterest actually says lol
        end
    end

    def destroy
        logout! if logged_in?
        redirect_to new_session_url
    end
end