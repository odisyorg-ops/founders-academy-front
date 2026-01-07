import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, Download, AlertCircle, Loader2 } from "lucide-react";
import axios from "axios";

// Define the shape of the data we expect from the backend
interface DownloadItem {
  name: string;
  downloadUrl: string;
}

const Success = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const sessionId = searchParams.get("session_id");

  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [items, setItems] = useState<DownloadItem[]>([]);

  useEffect(() => {
    if (!sessionId) {
      setStatus("error");
      return;
    }

    // Call the verification endpoint we just created
    axios.post("http://localhost:3000/api/verify-session", { sessionId })
      .then((res) => {
        if (res.data.success) {
          setItems(res.data.items);
          setStatus("success");
        } else {
          setStatus("error");
        }
      })
      .catch((err) => {
        console.error("Verification failed:", err);
        setStatus("error");
      });
  }, [sessionId]);

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-xl md:p-12">
        
        {/* === LOADING STATE === */}
        {status === "loading" && (
          <div className="flex flex-col items-center py-10">
            <Loader2 className="mb-4 h-12 w-12 animate-spin text-indigo-600" />
            <h2 className="text-xl font-semibold text-slate-700">Verifying your order...</h2>
            <p className="text-slate-500">Please do not close this tab.</p>
          </div>
        )}

        {/* === SUCCESS STATE === */}
        {status === "success" && (
          <div className="animate-in fade-in zoom-in duration-500 text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="mb-2 text-3xl font-bold text-slate-900">Payment Successful!</h1>
            <p className="mb-8 text-slate-600">
              Thank you for your purchase. Your resources are ready for download below.
            </p>

            <div className="space-y-4 text-left">
              {items.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-indigo-100 hover:bg-indigo-50"
                >
                  <div className="mr-4 overflow-hidden">
                    <p className="truncate font-semibold text-slate-800">{item.name}</p>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Ready to Download</span>
                  </div>
                  
                  <a
                    href={item.downloadUrl}
                    download // This attribute forces the browser to save the file
                    className="flex shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition-transform active:scale-95 hover:bg-indigo-700"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              ))}
            </div>

            <button 
              onClick={() => navigate("/")}
              className="mt-8 text-sm font-medium text-slate-500 hover:text-slate-800 underline"
            >
              Return to Homepage
            </button>
          </div>
        )}

        {/* === ERROR STATE === */}
        {status === "error" && (
          <div className="text-center py-8">
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-500" />
            <h2 className="text-2xl font-bold text-slate-900">Verification Failed</h2>
            <p className="mt-2 text-slate-600">
              We couldn't verify your payment session. If you were charged, please contact support.
            </p>
            <button
              onClick={() => navigate("/")}
              className="mt-6 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800"
            >
              Go Back Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Success;