from setuptools import find_packages, setup

setup(
    name='src',
    packages=find_packages(),
    install_requires=[
        'numpy>=1.15',
        'pandas>=0.23',
        'scipy>=1.1.0',
        'torch==1.0.1',
        'molsets==0.1.3'
    ],    
    version='0.1.0',
    description='ai drug discovery for technica',
    author='lucy',
    license='MIT',
)
