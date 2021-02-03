#!/usr/bin/env python3
# Create venv
python3 -m venv <myenv>

# Activate venv
source <myenv>/bin/activate

# Install requirements
pip install -r requirements.txt

# Windows
Set-ExecutionPolicy Unrestricted -Scope Process
.\graphqlenv\Scripts\Activate.ps1
pip install -r .\requirements.txt