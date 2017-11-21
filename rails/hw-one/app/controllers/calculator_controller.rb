# Name of class needs to match name in routes.rb before the hash
class CalculatorController < ApplicationController
  # Extending a base from the application controller (copies base behavior from application controller)
  def show
  end

  def add
    @sum = params[:x].to_i + params[:y].to_i
    render action: "show"
  end
  # need to create subtraction, division, and multiplication
  def subtract
    @subtraction = params[:x].to_i - params[:y].to_i
    render action: "show"
  end

  def multiply
    @multiplication = params[:x].to_i * params[:y].to_i
    render action: "show"
  end
  def divide
    @division = params[:x].to_i / params[:y].to_i
    render action: "show"
  end
end
