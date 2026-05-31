
            window.calcCI = function() {
                const p = parseFloat(document.getElementById('ci-p').value || 1000);
                const r = parseFloat(document.getElementById('ci-r').value || 8) / 100;
                const t = parseFloat(document.getElementById('ci-t').value || 10);
                const res = document.getElementById('ci-res');
                const total = p * Math.pow(1 + r, t);
                res.innerHTML = `Ending Portfolio Value: <strong>$${total.toFixed(2)}</strong>`;
            }
            calcCI();
        