from django.shortcuts import render

def family_chart(request):
    data = [
        {
            "id": "0",
            "rels": {},
            "data": {
                "first name": "Name",
                "last name": "Surname",
                "birthday": 1970,
                "avatar": "https://static8.depositphotos.com/1009634/988/v/950/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg",
                "gender": "M"
            }
        }
    ]
    return render(request, 'family_chart.html', {'data': data})