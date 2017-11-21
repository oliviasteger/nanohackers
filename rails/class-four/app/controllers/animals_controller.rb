class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
  end

  def create
    params.permit!

    @animal = Animal.new(params[:animal])

    if @animal.save
      redirect_to action: :show, id: @animal.id
    else
      render action: :new
    end
  end

  def update
    params.permit!

    @animal = Animal.find(params[:id])
    @animal.update_attributes(params[:animal])
    config.logger = Logger.new(STDOUT)
    logger.debug(@animal.id)

    if @animal.save
      @animal.save
      redirect_to action: :show, id: @animal.id
      logger.debug(@animal.save)
    else
      render action: :new
    end
  end

  def new
    @animal = Animal.new
  end

  def show
    @animal = Animal.find(params[:id])
  end

  def edit
    @animal = Animal.find(params[:id])
  end

  def clear
    Animal.destroy_all
      redirect_to "/"
  end
end
