# zhoodar.github.io

## Running zhoodar.github.io locally

You can run the website locally to preview any changes you want to make before submitting a Pull Request.

If you are using Linux you can follow the steps below. If you are not using Linux please follow the instructions at https://jekyllrb.com/docs/installation after cloning this repository to your local machine.

Clone the repository:
~~~~
git clone https://github.com/zhoodar/zhoodar.github.io.git
~~~~

Install ruby, ruby-dev and build-essential packages: 
~~~~
sudo apt-get install ruby ruby-dev build-essential
~~~~

Install the Jekyll and bundler gems:
~~~~
gem install jekyll bundler
~~~~

Move into the site's directory:
~~~~
cd zhoodar.github.io
~~~~

Install the dependencies required by the website's Gemfile:
~~~~
bundle install
~~~~

Build the site and start the local server:
~~~~
bundle exec jekyll serve 
~~~~

View the site by browsing to: http://127.0.0.1:4000

Note: changes you make to the .md files will be automatically rebuilt and there is no need to restart the server to view the changes. If you make any changes to the "_config.yml" file however, you will need to stop the server using Ctrl+C and start it again using the "bundle exec jekyll serve" command.


