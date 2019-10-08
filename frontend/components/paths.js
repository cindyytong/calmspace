<header>
    {/* Logged Out Nav */}
        <AuthRoute exact path='/user/login' component={SimpleNavBar}/>
        <AuthRoute exact path='/user/signup' component={SimpleNavBar}/>
        <AuthRoute exact path='/' component={NavBar}/>
        <ProtectedRoute exact path='/therapist/login' component={NavBar}/>
    {/* Logged In Nav */}
        <ProtectedRoute path='/auth' component={AuthNavBarContainer}/>
    </header>
        
    {/* Logged out views */}
        <AuthRoute exact path='/' component={Splash}/>
        <AuthRoute exact path="/user/login" component={UserLogInFormContainer}/>
        <AuthRoute exact path="/user/signup" component={UserSignUpFormContainer}/>
        <AuthRoute exact path="/therapist/login" component={DemoTherapistContainer}/>

    {/* Auth routes  */}
        <ProtectedRoute exact path="/auth/user/onboard" component={OnboardContainer}/>
        <ProtectedRoute exact path="/auth/user/:userId/matches" component={MatchContainer}/>
        <ProtectedRoute path="/auth/user/:userId/chatroom" component={UserChatroom}/>
        <ProtectedRoute path="/auth/therapist/dashboard" component={TherapistDashboardContainer}/>

    <footer>
        <Route exact path='/' component={Footer} />
        <Route exact path='/therapist/login' component={Footer} />
    </footer>
    </>