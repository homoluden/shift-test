Rails.application.routes.draw do
  # TODO: think about providing REST API for React components (maybe prefixed w/ 'api' term)
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
end
