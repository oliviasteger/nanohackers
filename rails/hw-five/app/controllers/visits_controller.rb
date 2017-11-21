class VisitsController < ApplicationController
  def index
    @visits = Visit.all
  end

  def create
    params.permit!

    @visit = Visit.new(params[:visit])

    if @visit.save
      render action: :new
    end
  end

  # def update
  #   params.permit!
  #
  #   @visit = Visit.find(params[:id])
  #   @visit.update_attributes(params[:visit])
  #   config.logger = Logger.new(STDOUT)
  #   logger.debug(@visit.id)
  #
  #   if @visit.save
  #     @visit.save
  #     redirect_to action: :show, id: @visit.id
  #     logger.debug(@visit.save)
  #   else
  #     render action: :new
  #   end
  # end

  def new
    @visit = Visit.new
  end

  # def show
  #   @visit = Visit.find(params[:id])
  # end
  #
  # def edit
  #   @visit = Visit.find(params[:id])
  # end
  #
  # def clear
  #   Visit.destroy_all
  #     redirect_to "/"
  # end
  #
  # def clear2
  #   Visit.destroy_all
  #     redirect_to "/"
  # end
end
