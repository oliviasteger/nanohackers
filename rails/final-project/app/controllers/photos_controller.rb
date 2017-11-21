class PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def create
    params.permit!

    @photo = Photo.new(params[:photo])

    if @photo.save
      redirect_to action: :show, id: @photo.id
    else
      render action: :new
    end
  end

  def update
    params.permit!

    @photo = Photo.find(params[:id])
    @photo.update_attributes(params[:photo])
    logger.debug(@photo.id)

    if @photo.save
      @photo.save
      redirect_to action: :show, id: @photo.id
      logger.debug(@photo.save)
    else
      render action: :new
    end
  end

  def new
    @photo = Photo.new
  end

  def show
    @photo = Photo.find(params[:id])
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    redirect_to '/'
  end
end
