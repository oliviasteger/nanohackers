class WalletController < ApplicationController
  def show
    render params[:page]
  end
end
