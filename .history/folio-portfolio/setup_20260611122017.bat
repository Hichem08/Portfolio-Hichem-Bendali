@echo off
REM Folio Portfolio - Setup Script for Windows

echo.
echo ============================================
echo   Folio Portfolio - Setup Script
echo ============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js is installed
echo.

REM Navigate to project root
cd /d "%~dp0"

echo Installing Server dependencies...
cd server
call npm install
if %ERRORLEVEL% neq 0 (
    echo ERROR: Failed to install server dependencies
    pause
    exit /b 1
)
echo ✓ Server dependencies installed
echo.

cd ..

echo Installing Client dependencies...
cd client
call npm install
if %ERRORLEVEL% neq 0 (
    echo ERROR: Failed to install client dependencies
    pause
    exit /b 1
)
echo ✓ Client dependencies installed
echo.

echo.
echo ============================================
echo   Setup Complete!
echo ============================================
echo.
echo Next steps:
echo.
echo 1. Create a Supabase account (free): https://supabase.com
echo 2. Create a new project in Supabase
echo 3. Go to Settings ^> API and copy:
echo    - Project URL ^(SUPABASE_URL^)
echo    - Service Role Key ^(SUPABASE_SERVICE_ROLE_KEY^)
echo.
echo 4. Open: server\.env
echo    and fill in your Supabase credentials
echo.
echo 5. In Supabase, go to SQL Editor and run the SQL from:
echo    server\README_SUPABASE.md
echo.
echo 6. Create a storage bucket named 'portfolio-images' and make it public
echo.
echo 7. Run in two PowerShell terminals:
echo    Terminal 1: cd server; npm run dev
echo    Terminal 2: cd client; npm run dev
echo.
echo For detailed instructions, see README.md
echo.
pause
