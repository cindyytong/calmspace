Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update] do 
      get 'get_matches', to: 'users#get_matches'
    end 
    resources :therapists, only: [:show, :index]

    resources :topics, only: [:index, :show]

    post 'session/:type', to: 'sessions#create', as: 'signin'
    delete 'session', to: 'sessions#destroy', as: 'signout'

    get 'get_matches', to: 'users#get_matches'  
  end 
end


