Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create]
    resources :therapists, only: [:show]

    post 'session/:type', to: 'sessions#create', as: 'signin'
    delete 'session/:type', to: 'sessions#delete', as: 'signout'
  end 
end


