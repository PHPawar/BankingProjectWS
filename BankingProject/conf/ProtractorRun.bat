@echo off
call echo ========================================================================
call echo Hello, Welcome to Page Object Model Framework.[%DATE% %TIME%]
call echo ========================================================================
call set PR_BasePath=C:\Users\Prashant\BankingProjectWS
call echo %PR_BasePath%

call echo Deleting the Existing Logs
call chdir %PR_BasePath%\BankingProject\logs
call del /s/q Transaction.log

call chdir %PR_BasePath%\BankingProject\node_modules\jasmine-allure-reporter
call rd /s/q allure-results

call chdir %PR_BasePath%\BankingProject\conf
call rd /s/q allure-results

call set /p PR_Parameter=Enter the TestCase/Suite to be execute: 
call protractor conf.js %PR_Parameter%

call set /p PR_GenReport=Do you want to generate the report?[Y/N]::
 if %PR_GenReport%==N EXIT /B

call echo ======================
call echo Generating Report .....
call echo ======================
call Xcopy /E /I %PR_BasePath%\BankingProject\conf\allure-results %PR_BasePath%\BankingProject\node_modules\jasmine-allure-reporter\allure-results
call chdir %PR_BasePath%\BankingProject\node_modules\jasmine-allure-reporter
call mvn site -Dallure.results_pattern=allure-results  
call chdir %PR_BasePath%\BankingProject
call rd /s/q Results 
call chdir %PR_BasePath%\BankingProject\node_modules\jasmine-allure-reporter\target\site 
call Xcopy /E /I allure-maven-plugin %PR_BasePath%\BankingProject\Results
call echo ===================================
call echo Report generation is completed
call echo ===================================
call chdir %PR_BasePath%\BankingProject\conf\

call set /p PR_GenReport=Do you want to email results to stakeholder [Y/N]::
if %PR_GenReport%==N EXIT /B
call node mail.js 
call chdir %PR_BasePath%\BankingProject\conf
 