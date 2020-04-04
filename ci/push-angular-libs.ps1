$ErrorActionPreference = "Stop"

git subtree split -P angular/libs/Identity -b angular/libs/Identity

git push origin angular/libs/Identity:angular/libs/Identity

