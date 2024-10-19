from django.shortcuts import render
from .forms import WastewaterForm

def index(request):
    if request.method == 'POST':
        form = WastewaterForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            results = {}
            ranges = {
                "bod5": (3, 15),
                "cod": (20, 125),
                "tss": (10, 35),
                "tds": (500, 2000),
                "no2": (0.1, 0.5),
                "no3": (0.5, 10),
                "nh3": (0.1, 2),
                "nh4": (0.5, 3),
                "fog": (1, 10)
            }
            for param, (low, high) in ranges.items():
                value = data.get(param)
                if value is not None:
                    if value < low:
                        within_range = True
                    else:
                        within_range = low <= value <= high
                    results[param] = {'value': value, 'within_range': within_range, 'range': f"{low}-{high}"}
            return render(request, 'wastewater_app/result.html', {'results': results})
    else:
        form = WastewaterForm()
    return render(request, 'wastewater_app/index.html', {'form': form})
