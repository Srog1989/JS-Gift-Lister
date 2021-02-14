class GiftsController < ApplicationController
    
    def index 
        gifts =Gift.all
        render json: gifts
    end 

    def create
        # user = User.find(params[:user_id])
        # gift = user.gifts.build({
        #     nickname:Faker::Name.first_name,
        #     species:Faker::Games::Pokemon.name
        # })
        # render json: pokemon.save ? pokemon : {message: pokemon.errors.messages[:team_max][0]}  
    end

    def destroy
        gift = Gift.find(params[:id])
        gift.destroy
    end
end