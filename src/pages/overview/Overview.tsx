
import { useOverview } from '@/hooks/useOverview';
import { StatCard } from '@/components/features/overview/StatCard';
import { TrendingUp, ShoppingCart, Package, Users } from 'lucide-react';
import { formatPrice } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

export default function Overview() {
    const { data, isLoading, error, refetch } = useOverview();

    // Loading state
    if (isLoading) {
        return (
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                        <Skeleton key={i} className="h-32" />
                    ))}
                </div>
            </div>
        );
    }

    // Error state
    if (error) {
        return (
            <div>
                <Alert variant="destructive">
                    <AlertDescription>
                        Erreur lors du chargement des statistiques.
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => refetch()}
                            className="ml-4"
                        >
                            Réessayer
                        </Button>
                    </AlertDescription>
                </Alert>
            </div>
        );
    }

    if (!data) return null;
    return (
        <div>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                <StatCard
                    title="Chiffre d'affaires"
                    value={formatPrice(data.totalRevenue)}
                    icon={TrendingUp}
                    iconBg="bg-green-100"
                    iconColor="text-green-600"
                    change={data.revenueChange}
                />

                <StatCard
                    title="Commandes"
                    value={data.totalOrders.toLocaleString()}
                    icon={ShoppingCart}
                    iconBg="bg-blue-100"
                    iconColor="text-blue-600"
                    change={data.ordersChange}
                />

                <StatCard
                    title="Produits"
                    value={data.totalProducts.toLocaleString()}
                    icon={Package}
                    iconBg="bg-purple-100"
                    iconColor="text-purple-600"
                    change={data.productsChange}
                />

                <StatCard
                    title="Clients"
                    value={data.totalCustomers.toLocaleString()}
                    icon={Users}
                    iconBg="bg-orange-100"
                    iconColor="text-orange-600"
                    change={data.customersChange}
                />
            </div>

            {/* Graphiques et tableaux à ajouter plus tard */}
        </div>
    );
}