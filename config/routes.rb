Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#root" 
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy], shallow: true do
      resources :follows, only: [:create, :destroy, :index]
    end
    get 'users/:id/following', to: 'follows#following'
    get 'users/other/:id', to: 'users#show_other'
    get 'users/:id/pins', to: 'users#index_pins'
    get 'users/:id/boards', to: 'users#index_boards'

    resources :pins, except: [:new, :edit]

    resources :boards, except: [:new, :edit, :index], shallow: true do
      resources :follows, only: [:create, :destroy, :index]
    end
    get 'boards/:id/pins', to: "boards#index_pins"
    get 'currentuser/boards', to: "boards#current_user_list" 

    resources :boards_pins, only: [:create, :destroy, :index]

    resource :session, only: [:create, :destroy]
  end
end
