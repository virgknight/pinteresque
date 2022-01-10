Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#root" 
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy]
    get 'users/other/:id', to: 'users#show_other'
    get 'users/:id/pins', to: 'users#index_pins'
    get 'users/:id/boards', to: 'users#index_boards'

    resources :pins, except: [:new, :edit]
    resources :boards, except: [:new, :edit, :index]
    get 'boards/:id/pins', to: "boards#index_pins"
    resources :boards_pins, only: [:create, :destroy, :index]
    resource :session, only: [:create, :destroy]
  end
end
