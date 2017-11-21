class Animal < ActiveRecord::Base
  validates :name, presence: true
  validates :age, presence: true
  validates :age, numericality: true
  validates :kind, presence: true
end
