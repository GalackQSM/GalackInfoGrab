@echo off
title GalackInfoGrab by GalackQSM#7926
set token=

set /p token=Entrez le token d'un membre ou bot: %=%
cls

node "info-min.js" %token%
pause > nul