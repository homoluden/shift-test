class Report < ApplicationRecord
    default_scope { order(order: :asc, id: :asc) }

    has_one_attached :file

    validates :title, :presence => true, :uniqueness => true, :length => { in: 3..10 }
end
