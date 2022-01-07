class Api::PinsController < ApplicationController
    def index
        @pins = Pin.all
    end

    def show
        @pin = Pin.find(params[:id])
    end

    def create
        @pin = Pin.new(pin_params)
        if @pin.save
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def update
        @pin = Pin.find(params[:id])
        if @pin.update(pin_params)
            render :show
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        @pin = Pin.find(params[:id])
        if @pin.owner_id == current_user.id
            @pin.destroy
            render :show
        else
            render json: ["Sorry, only the owner of a pin can delete it"], status: 403
        end
    end

    protected
    def pin_params
        params.require(:pin).permit(:owner_id, :title, :alt_text, :photo)
    end
end