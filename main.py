def dot_trick(username):
  """Generates Gmail addresses using the dot trick and saves them to a user-chosen file.

  Args:
      username (str): The username portion of the email address (without "@gmail.com").

  Returns:
      None
  """

  emails = list()
  username_length = len(username)
  combinations = pow(2, username_length - 1)
  padding = "{0:0" + str(username_length - 1) + "b}"

  for i in range(0, combinations):
      bin = padding.format(i)
      full_email = ""

      for j in range(0, username_length - 1):
          full_email += (username[j])
          if bin[j] == "1":
              full_email += "."
      full_email += (username[j + 1])
      emails.append(full_email + "@gmail.com")

  # Get user input for filename (handle potential errors gracefully)
  while True:
      try:
          filename = input("Enter desired filename (avoid special characters): ")
          with open(filename, 'w') as f:  # Open in write mode
              for email in emails:
                  f.write(email + "\n")
              print(f"Emails saved successfully to '{filename}'.")
              break
      except FileNotFoundError:
          print("Invalid filename. Please try again.")
      except OSError as e:
          print(f"Error saving file: {e}")
          print("Would you like to try with a different filename? (y/n)")
          choice = input().lower()
          if choice != 'y':
              break

username = input("Give Username (ex. example, NOT example@gmail.com) = ")
dot_trick(username)
ex = input("Done :-). Press Ctrl+C to exit.") 
