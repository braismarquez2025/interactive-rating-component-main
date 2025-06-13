from django.shortcuts import render

def principalView(request):
    return render(request, 'general/principal.html')

def finalView(request):
    return render(request, 'general/final.html')