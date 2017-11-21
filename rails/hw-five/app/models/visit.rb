class Visit < ActiveRecord::Base
  validates :visitor, presence: true

  belongs_to :animal
end
