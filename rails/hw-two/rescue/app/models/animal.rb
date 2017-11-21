class Animal
  include ActiveModel::Model

  attr_accessor :name
  attr_accessor :age
  attr_accessor :location

  validates :name, presence: true
  validates :age, presence: true
  validates :location, presence: true
end
