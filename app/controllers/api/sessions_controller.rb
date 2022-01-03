class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Hmm, it doesn't look like any accounts match these credentials."], status: 401
        end
    end

    def destroy
        logout! if logged_in?
        render json: { } #VKNOTE: no data really needs to be sent to render logged out page... right?
    end
end