# Folio Portfolio - Setup Script for PowerShell

Write-Host ""
Write-Host "============================================"
Write-Host "   Folio Portfolio - Setup Script"
Write-Host "============================================"
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "✓ Node.js is installed ($nodeVersion)"
}
catch {
    Write-Host "ERROR: Node.js is not installed!"
    Write-Host "Download from: https://nodejs.org/"
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""

# Get script directory
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

# Install Server dependencies
Write-Host "Installing Server dependencies..."
Set-Location server
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to install server dependencies"
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✓ Server dependencies installed"
Write-Host ""

# Install Client dependencies
Set-Location ..
Write-Host "Installing Client dependencies..."
Set-Location client
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Failed to install client dependencies"
    Read-Host "Press Enter to exit"
    exit 1
}
Write-Host "✓ Client dependencies installed"
Write-Host ""

# Success message
Write-Host ""
Write-Host "============================================"
Write-Host "   Setup Complete!"
Write-Host "============================================"
Write-Host ""
Write-Host "Next steps:"
Write-Host ""
Write-Host "1. Create a Supabase account (free): https://supabase.com"
Write-Host "2. Create a new project in Supabase"
Write-Host "3. Go to Settings > API and copy:"
Write-Host "   - Project URL (SUPABASE_URL)"
Write-Host "   - Service Role Key (SUPABASE_SERVICE_ROLE_KEY)"
Write-Host ""
Write-Host "4. Open: server\.env"
Write-Host "   and fill in your Supabase credentials"
Write-Host ""
Write-Host "5. In Supabase, go to SQL Editor and run the SQL from:"
Write-Host "   server\README_SUPABASE.md"
Write-Host ""
Write-Host "6. Create a storage bucket named 'portfolio-images' and make it public"
Write-Host ""
Write-Host "7. Run in two PowerShell terminals:"
Write-Host "   Terminal 1: cd server; npm run dev"
Write-Host "   Terminal 2: cd client; npm run dev"
Write-Host ""
Write-Host "For detailed instructions, see README.md"
Write-Host ""
Read-Host "Press Enter to close"
