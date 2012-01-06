Vagrant::Config.run do |config|
  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "base"

  # Force gui to resolve some issues where the VM becomes unreachable
  # Fix for Vagrant not catching up with VM that started successfully: https://github.com/mitchellh/vagrant/issues/455
  # While the ticket is closed, the problem remains in vagrant gem 0.8.10
  # If there's a gui, at least you can log in an do
  #
  # $ sudo /etc/init.d/networking restart
  config.vm.boot_mode = :gui
  config.ssh.max_tries = 150
  
  # Forward guest port 1111 to host port 1111 and name the mapping "buster"
  config.vm.forward_port("buster", 1111, 1111)
    
  # Enable and configure the chef solo provisioner
  config.vm.provision :chef_solo do |chef|
    
    chef.json = {
      "hostname" => "try-buster.local"
    }
    
    # chef.log_level = "debug"
    chef.add_recipe "try_buster"
  end
end