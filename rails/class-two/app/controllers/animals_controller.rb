class AnimalsController < ApplicationController
  def create
    params.permit!
    @animal = Animal.new(params[:animal])

    if @animal.valid?
      render action: :show
    else
      render action: :new
    end
  end

  def show
  end

  def new
    @animal = Animal.new
  end
end
