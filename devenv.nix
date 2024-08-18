{ pkgs, lib, config, inputs, ... }:

{
  # https://devenv.sh/basics/
  env.GREET = "devenv-schnow265.github.io";

  # https://devenv.sh/packages/
  packages = [ 
    pkgs.git

    pkgs.python311Packages.mkdocs-material
#    pkgs.python311Packages.mkdocs-rss-plugin
  ];

  # https://devenv.sh/languages/
  # languages.rust.enable = true;

  # https://devenv.sh/processes/
  processes.mkdocs.exec = "mkdocs serve";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  # https://devenv.sh/scripts/
  scripts.hello.exec = ''
    echo hello from $GREET
  '';

  scripts.serve.exec = ''
    mkdocs serve
  '';

  enterShell = ''
    alias cls=clear
    git --version
  '';

  # https://devenv.sh/tests/
  enterTest = ''
    echo "Running tests"
    git --version | grep --color=auto "${pkgs.git.version}"
  '';

  # https://devenv.sh/pre-commit-hooks/
  # pre-commit.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
  languages.python = {
    enable = true;
    manylinux.enable = false;
  };
}
