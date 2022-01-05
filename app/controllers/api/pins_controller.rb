class Api::PinsController < ApplicationController
    def index
        @pins = Pin.all
    end

    def show
        @pin = Pin.find(params[:id])
    end

    def create
    end

    def update
    end

    def destroy
    end

    protected
    def pin_params
        params.require(:pins).permit(:owner_id, :title, :alt_text)
    end
end