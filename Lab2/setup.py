from setuptools import setup

setup(
    name = "Lab2",
    version = "1.0",
    author = "Ruslan Grishan",
    author_email = "ruslan1grishan@gmail.com",
    packages = ["additional", "factory", "my_json_serializer", 
        "pickle_serializer", "my_yaml_serializer",
        "my_toml_serializer"],
    scripts = ["serializer.py"]
)