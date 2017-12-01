POD=$1

REPLACE_PATTERN="s/\\(image: wolfhesse\\/dotnetapp-sample\\):.*\$/\\1:$2/"

echo "$REPLACE_PATTERN"


cat <<E
 kubectl get po $POD -o yaml | sed "$REPLACE_PATTERN" | kubectl replace -f -
E
 kubectl get po $POD -o yaml | sed "$REPLACE_PATTERN" | kubectl replace -f -



