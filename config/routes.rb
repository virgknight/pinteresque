Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "static_pages#root" 
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy]
    get 'users/other/:id', to: 'users#show_other', as: 'show_other_user'

    resources :pins, except: [:new, :edit]
    resource :session, only: [:create, :destroy]
  end
end
