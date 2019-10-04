class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string :title
      t.text :description
      t.jsonb :file_meta, null: false, default: '{}'

      t.timestamps
    end

    add_index  :reports, :file_meta, using: :gin
  end
end
