# config/routes.rb
Rails.application.routes.draw do
  devise_for :users, skip: [:sessions, :registrations], defaults: { format: :json }

  devise_scope :user do
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'
    post 'signup', to: 'registrations#create'
  end

  post '/search', to: 'cafes#search'
end
