Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # root to: 'messages#root'
  
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update] do 
      get 'get_matches', to: 'users#get_matches'
    end 
    resources :therapists, only: [:show]

    resources :topics, only: [:index, :show]

    resources :topic_interests, only: [:create, :show]

    post 'session/:type', to: 'sessions#create', as: 'signin'
    delete 'session', to: 'sessions#destroy', as: 'signout'
    get 'get_matches', to: 'users#get_matches'  

    resources :chat_rooms, only: [:index, :create, :show, :update] do 
      resources :messages, only: [:create] # create is handled by action cable
    end 

    resources :messages, only: [:index, :show]
  end 

  root to: "static_pages#root"
  mount ActionCable.server, at: '/cable'
end


