<nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
    <div class="container-fluid">
        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <!-- User -->
        <ul class="nav align-items-center d-md-none">
            <li class="nav-item dropdown">
                <a class="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="media align-items-center">
                        <span class="avatar avatar-sm rounded-circle">
                        <img alt="Image placeholder" src="{{ asset('argon') }}/img/theme/team-1-800x800.jpg">
                        </span>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                    <div class=" dropdown-header noti-title">
                        <h6 class="text-overflow m-0">{{ __('Welcome!') }}</h6>
                    </div>
                    <a href="{{ route('profile.edit') }}" class="dropdown-item">
                        <i class="ni ni-single-02"></i>
                        <span>{{ __('My profile') }}</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="ni ni-settings-gear-65"></i>
                        <span>{{ __('Settings') }}</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="ni ni-calendar-grid-58"></i>
                        <span>{{ __('Activity') }}</span>
                    </a>
                    <a href="#" class="dropdown-item">
                        <i class="ni ni-support-16"></i>
                        <span>{{ __('Support') }}</span>
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="{{ route('logout') }}" class="dropdown-item" onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
                        <i class="ni ni-user-run"></i>
                        <span>{{ __('Logout') }}</span>
                    </a>
                </div>
            </li>
        </ul>
        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="sidenav-collapse-main">
            <!-- Collapse header -->
            <div class="navbar-collapse-header d-md-none">
                <div class="row">
                    <div class="col-6 collapse-brand">
                     
                    </div>
                    <div class="col-6 collapse-close">
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Form -->
            <form class="mt-4 mb-3 d-md-none">
                <div class="input-group input-group-rounded input-group-merge">
                    <input type="search" class="form-control form-control-rounded form-control-prepended" placeholder="{{ __('Search') }}" aria-label="Search">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <span class="fa fa-search"></span>
                        </div>
                    </div>
                </div>
            </form>
            <!-- Navigation -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('home') }}">
                        <i class="ni ni-tv-2 text-primary"></i> {{ __('Dashboard') }}
                    </a>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="{{ route('messages') }}">
                      <i class="ni ni-chat-round text-default"></i>
                      <span class="nav-link-text">Chat Messages</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('contact_submissions') }}">
                      <i class="ni ni-laptop text-default"></i>
                      <span class="nav-link-text">Contact Forms</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('service_request') }}">
                      <i class="ni ni-app text-default"></i>
                      <span class="nav-link-text">Service Request</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('categories') }}">
                      <i class="ni ni-collection text-default"></i>
                      <span class="nav-link-text">Categories</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('subcategories') }}">
                      <i class="ni ni-tag text-default"></i>
                      <span class="nav-link-text">Sub Categories</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{{ route('services') }}">
                      <i class="ni ni-bullet-list-67 text-default"></i>
                      <span class="nav-link-text">Services</span>
                    </a>
                </li>
                <li class="nav-item">
                </li>
                <li class="nav-item mb-5 mr-4 ml-4 pl-1 bg-danger" style="position: absolute; bottom: 0; display: none !important;">
                    <a class="nav-link text-white" href="https://www.creative-tim.com/product/argon-dashboard-pro-laravel" target="_blank">
                        <i class="ni ni-cloud-download-95"></i> Upgrade to PRO
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
