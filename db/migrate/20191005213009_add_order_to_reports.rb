class AddOrderToReports < ActiveRecord::Migration[5.2]
  def change
    add_column :reports, :order, :integer
  end
end
