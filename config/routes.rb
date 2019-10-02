Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show ]
    # nested session api/users/session
    resource :users do 
      resource :session, only: [:create, :destroy, :show]
    end

    resources :therapists, only: [:show]
    # api/therapists/session
    resource :therapists do 
      resource :session, only: [:create, :destroy, :show]
    end
  end 
end


# write two custom routes 