import os
import json
import natsort

# Path to the directory containing your files
directory_path = './files/xml'

# Extract file names
file_names = natsort.natsorted([
    os.path.splitext(f)[0] for f in os.listdir(directory_path)
    if os.path.isfile(os.path.join(directory_path, f)) and f.lower().endswith('.xml')
])

# Save to JSON
with open('files_info.json', 'w') as fp:
    json.dump(file_names, fp)
