class AddFood < ActiveRecord::Migration[5.1]
  def change
    add_column :animals, :food, :string
  end
end
