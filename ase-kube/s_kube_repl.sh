kubectl get pod dotnetapp-sample-3679734087-7hx4h | sh s_awk_eins.sh | xargs -I {} sh s_replace_pod.sh {} 155
